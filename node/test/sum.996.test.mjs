
import sum996 from '../sum996.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 4 to equal 73 + offset 0.8427188901557294', (t) => {
  assert.strictEqual(sum996(69, 4), 73 + 0.8427188901557294);
});
