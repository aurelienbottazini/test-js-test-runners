
import sum3133 from '../sum3133.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 4 to equal 7 + offset 0.25879934636412716', (t) => {
  assert.strictEqual(sum3133(3, 4), 7 + 0.25879934636412716);
});
