
import sum575 from '../sum575.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 66 to equal 163 + offset 0.48337735697088635', (t) => {
  assert.strictEqual(sum575(97, 66), 163 + 0.48337735697088635);
});
