import {
    IssuePriorityHighestIcon,
    IssuePriorityHighIcon,
    IssuePriorityLowestIcon,
    IssuePriorityLowIcon,
    IssuePriorityMediumIcon
} from './../components/Icon/IssuePriority';

import {
    IssueBugIcon,
    IssueStoryIcon,
    IssueTaskIcon
} from './../components/Icon/IssueType';

export const IssueType = {
    TASK: 'task',
    BUG: 'bug',
    STORY: 'story',
};

export const IssueStatus = {
    BACKLOG: 'backlog',
    SELECTED: 'selected',
    INPROGRESS: 'inprogress',
    DONE: 'done',
};

export const IssuePriority = {
    HIGHEST: '5',
    HIGH: '4',
    MEDIUM: '3',
    LOW: '2',
    LOWEST: '1',
};

export const IssueTypeCopy = {
    [IssueType.TASK]: 'Task',
    [IssueType.BUG]: 'Bug',
    [IssueType.STORY]: 'Story',
};

export const IssueStatusCopy = {
    [IssueStatus.BACKLOG]: 'Backlog',
    [IssueStatus.SELECTED]: 'Selected for development',
    [IssueStatus.INPROGRESS]: 'In progress',
    [IssueStatus.DONE]: 'Done',
};

export const IssuePriorityCopy = {
    [IssuePriority.HIGHEST]: 'Highest',
    [IssuePriority.HIGH]: 'High',
    [IssuePriority.MEDIUM]: 'Medium',
    [IssuePriority.LOW]: 'Low',
    [IssuePriority.LOWEST]: 'Lowest',
};

export const IssueTypeIcon = {
    [IssueType.TASK]: IssueTaskIcon,
    [IssueType.BUG]: IssueBugIcon,
    [IssueType.STORY]: IssueStoryIcon,
};

export const IssuePriorityIcon = {
    [IssuePriority.HIGHEST]: IssuePriorityHighestIcon,
    [IssuePriority.HIGH]: IssuePriorityHighIcon,
    [IssuePriority.MEDIUM]: IssuePriorityMediumIcon,
    [IssuePriority.LOW]: IssuePriorityLowIcon,
    [IssuePriority.LOWEST]: IssuePriorityLowestIcon,
};