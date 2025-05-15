
import sum4508 from '../sum4508.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 52 to equal 117 + offset 0.40523818373780507', (t) => {
  assert.strictEqual(sum4508(65, 52), 117 + 0.40523818373780507);
});
