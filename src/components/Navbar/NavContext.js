import React, { useReducer, useContext, useState } from "react";

/*
 * HOW DOES THIS NAV CONTEXT SYSTEM WORK?
 * ------------------------------------------------
 * the scroll progress of each section (managed by NavSection component)
 * will "submit" their scroll progress to a centralised place aka NavContext.
 *
 * NavBar component will then render the progress bar base on
 * the data stored progress data at NavContext.
 *
 *
 * Struct of the context data:
 * id (he hashtag id of the element)
 *  - progress (0 to 1)
 */

const initialContextData = {};
const NavContext = React.createContext([initialContextData, () => {}]);

function NavDataContext({ children }) {
  const [allSectionsProgress, setAllSectionProgress] = useState(
    initialContextData
  );
  const [currentSectionProgress, setCurrentSectionProgress] = useState(0);
  const [currentSectionId, setCurrentSectionId] = useState(0);

  // this function will be called by the consumer of the context,
  // pupose is to create an interface for updating the context
  const setSectionProgress = ({ id, progress }) => {
    const originalSectionData = allSectionsProgress[id];

    if (!originalSectionData) {
      // create a new entry if there is no original entry
      const sectionIndex = Object.keys(allSectionsProgress).length;
      allSectionsProgress[id] = {
        progress: progress,
        index: sectionIndex,
      };
      setAllSectionProgress(allSectionsProgress);
      return;
    }

    // entry already exits, update only
    allSectionsProgress[id].progress = progress;

    // compare the sections to see which is is the current sections
    if (progress !== 0) {
      // that means it already switches to the section, there is meaningful update
      // allSectionsProgress.currentSection = id;
      setCurrentSectionId(id);
      setCurrentSectionProgress(progress);
    }
    setAllSectionProgress(allSectionsProgress);
  };

  return (
    <NavContext.Provider
      value={[
        { progress: currentSectionProgress, id: currentSectionId },
        allSectionsProgress,
        setSectionProgress,
      ]}
    >
      {children}
    </NavContext.Provider>
  );
}

function useNavDataContext() {
  return useContext(NavContext);
}

function useUpdateSectionProgress() {
  const [
    currentSection,
    allSectionProgress,
    setSectionProgress,
  ] = useNavDataContext();
  return setSectionProgress;
}

function useSectionProgressData() {
  const [
    currentSection,
    allSectionProgress,
    setSectionProgress,
  ] = useNavDataContext();
  return [currentSection, allSectionProgress];
}

export {
  NavDataContext,
  useUpdateSectionProgress,
  useSectionProgressData,
  useNavDataContext,
};
