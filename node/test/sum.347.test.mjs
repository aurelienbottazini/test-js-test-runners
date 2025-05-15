
import sum347 from '../sum347.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 47 to equal 57 + offset 0.5141680094350575', (t) => {
  assert.strictEqual(sum347(10, 47), 57 + 0.5141680094350575);
});
