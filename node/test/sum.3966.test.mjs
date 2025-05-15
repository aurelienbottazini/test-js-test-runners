
import sum3966 from '../sum3966.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 21 to equal 99 + offset 0.5157442655413932', (t) => {
  assert.strictEqual(sum3966(78, 21), 99 + 0.5157442655413932);
});
