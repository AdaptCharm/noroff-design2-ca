import { Page, Button, Text } from '@components/ui'
import { SparklesIcon } from '@heroicons/react/outline'
import cn from 'clsx'

export default function _Button() {
  return (
    <Page title="Color">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Color</Text>
            <Text as="h2" size={18} weight={400}>
              Overview of all the used colors.
            </Text>
          </div>

          {/* Primary */}
          {[
            {
              name: 'Primary',
              colorMap: [
                { name: 'Black', background: 'bg-black', color: 'secondary' },
              ],
            },
            {
              name: 'Secondary',
              colorMap: [
                { name: 'White', background: 'bg-white', color: 'primary' },
              ],
            },
            {
              name: 'Gray',
              colorMap: [
                {
                  name: 'Gray 100',
                  background: 'bg-gray-100',
                  color: 'primary',
                },
                {
                  name: 'Gray 200',
                  background: 'bg-gray-200',
                  color: 'primary',
                },
                {
                  name: 'Gray 300',
                  background: 'bg-gray-300',
                  color: 'primary',
                },
                {
                  name: 'Gray 400',
                  background: 'bg-gray-400',
                  color: 'primary',
                },
                {
                  name: 'Gray 500',
                  background: 'bg-gray-500',
                  color: 'secondary',
                },
                {
                  name: 'Gray 600',
                  background: 'bg-gray-600',
                  color: 'secondary',
                },
                {
                  name: 'Gray 700',
                  background: 'bg-gray-700',
                  color: 'secondary',
                },
                {
                  name: 'Gray 800',
                  background: 'bg-gray-800',
                  color: 'secondary',
                },
              ],
            },
            {
              name: 'Success',
              colorMap: [
                {
                  name: 'Green',
                  background: 'bg-green-500',
                  color: 'secondary',
                },
              ],
            },
            {
              name: 'Warning',
              colorMap: [
                {
                  name: 'Orange',
                  background: 'bg-yellow-500',
                  color: 'secondary',
                },
              ],
            },
            {
              name: 'Error',
              colorMap: [
                {
                  name: 'Red',
                  background: 'bg-red-500',
                  color: 'secondary',
                },
              ],
            },
          ].map((category, idx) => (
            <div className="space-y-8" key={idx}>
              <Text as="h3">{category.name}</Text>
              <div className="border border-gray-200">
                {category.colorMap.map((c, idx) => (
                  <div
                    className={cn(
                      'flex items-center justify-between gap-6 p-6',
                      [`${c.background}`]
                    )}
                    key={idx}
                  >
                    <div className="flex-1">
                      <Text as="h4" color={`${c.color}`}>
                        {c.name}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}
