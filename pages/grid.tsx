import { Page, Text, Card } from '@components/ui'
import Image from 'next/image'

export default function Grid() {
  return (
    <Page title="Grid">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Grid</Text>
            <Text as="h2" size={18} weight={400}>
              Grid system represented by 12 columns.
            </Text>
          </div>

          {/* Rows */}
          <div className="space-y-8">
            <Text as="h3">Rows</Text>
            <div className="grid grid-cols-1 gap-8 border border-gray-200 rounded-md p-6">
              <Card>
                <Text>Container</Text>
              </Card>
              <Card>
                <Text>Container</Text>
              </Card>
            </div>
          </div>

          {/* Columns */}
          <div className="space-y-8">
            <Text as="h3">Columns</Text>
            <div className="grid grid-cols-3 gap-8 border border-gray-200 rounded-md p-6">
              <Card>
                <Text>Container</Text>
              </Card>
              <Card>
                <Text>Container</Text>
              </Card>
              <Card>
                <Text>Container</Text>
              </Card>
            </div>
          </div>

          {/* Column start & end */}
          <div className="space-y-8">
            <Text as="h3">Start &amp; End</Text>
            <div className="grid grid-cols-6 gap-8 border border-gray-200 rounded-md p-6">
              <Card>
                <Text>Container</Text>
              </Card>
              <Card className="col-start-2 col-span-4">
                <Text>Container</Text>
              </Card>
              <Card>
                <Text>Container</Text>
              </Card>
              <Card className="col-start-1 col-end-3">
                <Text>Container</Text>
              </Card>
              <Card>
                <Text>Container</Text>
              </Card>
              <Card>
                <Text>Container</Text>
              </Card>
              <Card className="col-end-7 col-span-2">
                <Text>Container</Text>
              </Card>
              <Card className="col-start-1 col-end-7">
                <Text>Container</Text>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
