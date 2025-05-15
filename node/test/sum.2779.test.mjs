
import sum2779 from '../sum2779.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 39 to equal 125 + offset 0.4709658328902918', (t) => {
  assert.strictEqual(sum2779(86, 39), 125 + 0.4709658328902918);
});
