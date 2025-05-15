
import sum1155 from '../sum1155.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 85 to equal 131 + offset 0.2722090377928865', (t) => {
  assert.strictEqual(sum1155(46, 85), 131 + 0.2722090377928865);
});
