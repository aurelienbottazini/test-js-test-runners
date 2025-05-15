
import sum2754 from '../sum2754.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 62 to equal 158 + offset 0.17448333211213962', (t) => {
  assert.strictEqual(sum2754(96, 62), 158 + 0.17448333211213962);
});
