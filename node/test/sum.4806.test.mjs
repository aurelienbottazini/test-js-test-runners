
import sum4806 from '../sum4806.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 78 to equal 157 + offset 0.47660988266753457', (t) => {
  assert.strictEqual(sum4806(79, 78), 157 + 0.47660988266753457);
});
