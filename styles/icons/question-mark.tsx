import { Icon } from '@chakra-ui/react';

const QuestionMark: React.FunctionComponent = () => {
  return (
    <Icon viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="19.2" fill="#fff" />
      <circle
        cx="20"
        cy="20"
        r="17.4"
        fill="none"
        stroke="#949899"
        strokeWidth="2"
      />
      <g>
        <path
          d="M17.7 23.3v-.6c0-2.1.8-3.6 3.1-5.7 1.3-1.2 1.7-2.1 1.7-3.2 0-1.2-.7-2.1-2.2-2.1-1.8 0-2.4 1.2-2.5 2.7h-4.4c.2-2.6 1.8-6.2 7-6.1 5.1 0 6.6 3.3 6.6 5.7 0 2-.6 3.3-2.9 5.4-1.3 1.2-1.8 2.3-1.8 3.5v.3h-4.6zm0 6.8v-5.2h4.7v5.2h-4.7z"
          fill="#949899"
        />
      </g>
    </Icon>
  );
};

export { QuestionMark };
