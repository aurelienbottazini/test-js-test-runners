
import sum846 from '../sum846.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 94 to equal 174 + offset 0.7822610102492676', (t) => {
  assert.strictEqual(sum846(80, 94), 174 + 0.7822610102492676);
});
