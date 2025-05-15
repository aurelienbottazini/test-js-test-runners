
import sum733 from '../sum733.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 32 to equal 35 + offset 0.2876767012093361', (t) => {
  assert.strictEqual(sum733(3, 32), 35 + 0.2876767012093361);
});
