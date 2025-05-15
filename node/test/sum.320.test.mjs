
import sum320 from '../sum320.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 23 to equal 80 + offset 0.7675749560920528', (t) => {
  assert.strictEqual(sum320(57, 23), 80 + 0.7675749560920528);
});
