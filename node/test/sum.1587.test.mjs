
import sum1587 from '../sum1587.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 38 to equal 122 + offset 0.8788347667882521', (t) => {
  assert.strictEqual(sum1587(84, 38), 122 + 0.8788347667882521);
});
