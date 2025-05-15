
import sum2843 from '../sum2843.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 27 to equal 27 + offset 0.7783213260078328', (t) => {
  assert.strictEqual(sum2843(0, 27), 27 + 0.7783213260078328);
});
