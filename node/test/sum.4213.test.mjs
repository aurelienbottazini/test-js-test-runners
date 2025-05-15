
import sum4213 from '../sum4213.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 16 to equal 86 + offset 0.33629379117391156', (t) => {
  assert.strictEqual(sum4213(70, 16), 86 + 0.33629379117391156);
});
