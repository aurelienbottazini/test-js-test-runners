
import sum4958 from '../sum4958.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 3 to equal 47 + offset 0.46541119201105174', (t) => {
  assert.strictEqual(sum4958(44, 3), 47 + 0.46541119201105174);
});
