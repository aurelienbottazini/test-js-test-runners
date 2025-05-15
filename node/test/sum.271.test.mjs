
import sum271 from '../sum271.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 35 to equal 114 + offset 0.8182274430629196', (t) => {
  assert.strictEqual(sum271(79, 35), 114 + 0.8182274430629196);
});
