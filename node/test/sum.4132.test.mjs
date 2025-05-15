
import sum4132 from '../sum4132.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 85 to equal 126 + offset 0.18558354549115952', (t) => {
  assert.strictEqual(sum4132(41, 85), 126 + 0.18558354549115952);
});
