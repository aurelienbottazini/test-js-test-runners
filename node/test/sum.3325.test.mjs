
import sum3325 from '../sum3325.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 58 to equal 126 + offset 0.26956623734663276', (t) => {
  assert.strictEqual(sum3325(68, 58), 126 + 0.26956623734663276);
});
