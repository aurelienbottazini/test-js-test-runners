
import sum2310 from '../sum2310.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 63 to equal 125 + offset 0.08221294510703536', (t) => {
  assert.strictEqual(sum2310(62, 63), 125 + 0.08221294510703536);
});
