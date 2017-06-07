
const Component1a = styled`
    color: goldenrod;
`;

const Component1b = styled.div`
    color: goldenrod;
`;

const Component2 = styled(Component1)`
    color: goldenrod;
`;


const StyledComponent2 = Component1a.extend`
  background-color: papayawhip;  
`;


//TODO: .extend , etc
const Component3 = Component1a.extend`
    color: goldenrod;
`;

