import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

//to show when the cards are loading
const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText /* shows lines of text loading */ />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
