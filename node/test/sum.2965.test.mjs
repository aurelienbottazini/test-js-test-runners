
import sum2965 from '../sum2965.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 65 to equal 79 + offset 0.9544742655637999', (t) => {
  assert.strictEqual(sum2965(14, 65), 79 + 0.9544742655637999);
});
