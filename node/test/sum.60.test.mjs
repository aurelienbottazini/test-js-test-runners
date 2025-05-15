
import sum60 from '../sum60.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 65 to equal 112 + offset 0.15291189825173634', (t) => {
  assert.strictEqual(sum60(47, 65), 112 + 0.15291189825173634);
});
