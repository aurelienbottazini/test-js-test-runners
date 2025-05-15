
import sum4496 from '../sum4496.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 82 to equal 142 + offset 0.47302344000839447', (t) => {
  assert.strictEqual(sum4496(60, 82), 142 + 0.47302344000839447);
});
