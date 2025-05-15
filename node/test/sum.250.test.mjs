
import sum250 from '../sum250.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 33 to equal 100 + offset 0.08472668306218423', (t) => {
  assert.strictEqual(sum250(67, 33), 100 + 0.08472668306218423);
});
