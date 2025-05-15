
import sum2596 from '../sum2596.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 99 to equal 173 + offset 0.7010478904552393', (t) => {
  assert.strictEqual(sum2596(74, 99), 173 + 0.7010478904552393);
});
