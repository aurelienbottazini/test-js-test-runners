
import sum2174 from '../sum2174.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 56 to equal 149 + offset 0.9845891612485137', (t) => {
  assert.strictEqual(sum2174(93, 56), 149 + 0.9845891612485137);
});
