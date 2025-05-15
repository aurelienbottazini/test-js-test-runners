
import sum4251 from '../sum4251.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 47 to equal 119 + offset 0.014178963123455346', (t) => {
  assert.strictEqual(sum4251(72, 47), 119 + 0.014178963123455346);
});
