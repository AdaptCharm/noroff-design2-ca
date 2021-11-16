import { Page, Text } from '@components/ui'

export default function Icons() {
  return (
    <Page title="Icons">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Icons</Text>
            <Text as="h2" size={18} weight={400}>
              For icons we use <b>Hero Icons</b>.
            </Text>
          </div>

          {/* Default */}
          <div className="space-y-8">
            <Text as="h3">Default</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <a href="https://heroicons.dev/" rel="noreferrer" target="_blank">
                Link to Hero Icons.
              </a>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
