
import sum650 from '../sum650.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 24 to equal 107 + offset 0.18130037533205967', (t) => {
  assert.strictEqual(sum650(83, 24), 107 + 0.18130037533205967);
});
