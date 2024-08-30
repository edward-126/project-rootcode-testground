import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Spacer from "@/components/shared/Spacer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <>
      <Spacer />
      <MaxWidthWrapper>
        <h2 className="mb-6">Add a new topic</h2>
        <form className="space-y-4">
          <div className="space-y-0.5">
            <Label>Topic Title</Label>
            <Input />
          </div>
          <div className="space-y-0.5">
            <Label>Topic Description</Label>
            <Textarea className="min-h-[150px]" />
          </div>
          <Button>Add Topic</Button>
        </form>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
