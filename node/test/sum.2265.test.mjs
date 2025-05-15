
import sum2265 from '../sum2265.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 86 to equal 144 + offset 0.6511059920162827', (t) => {
  assert.strictEqual(sum2265(58, 86), 144 + 0.6511059920162827);
});
