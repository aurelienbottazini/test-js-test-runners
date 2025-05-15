
import sum1775 from '../sum1775.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 13 to equal 64 + offset 0.06762214786857879', (t) => {
  assert.strictEqual(sum1775(51, 13), 64 + 0.06762214786857879);
});
