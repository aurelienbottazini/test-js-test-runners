
import sum2720 from '../sum2720.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 12 to equal 26 + offset 0.7752719837657137', (t) => {
  assert.strictEqual(sum2720(14, 12), 26 + 0.7752719837657137);
});
