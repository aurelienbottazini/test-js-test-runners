
import sum4774 from '../sum4774.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 82 to equal 124 + offset 0.34591876272624555', (t) => {
  assert.strictEqual(sum4774(42, 82), 124 + 0.34591876272624555);
});
