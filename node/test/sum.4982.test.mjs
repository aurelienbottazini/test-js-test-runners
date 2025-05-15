
import sum4982 from '../sum4982.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 77 to equal 121 + offset 0.7133451705874568', (t) => {
  assert.strictEqual(sum4982(44, 77), 121 + 0.7133451705874568);
});
