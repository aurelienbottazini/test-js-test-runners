
import sum338 from '../sum338.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 94 to equal 133 + offset 0.5955148996837174', (t) => {
  assert.strictEqual(sum338(39, 94), 133 + 0.5955148996837174);
});
