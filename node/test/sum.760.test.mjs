
import sum760 from '../sum760.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 71 to equal 128 + offset 0.4240684846767224', (t) => {
  assert.strictEqual(sum760(57, 71), 128 + 0.4240684846767224);
});
