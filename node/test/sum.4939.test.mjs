
import sum4939 from '../sum4939.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 85 to equal 133 + offset 0.49061630439141435', (t) => {
  assert.strictEqual(sum4939(48, 85), 133 + 0.49061630439141435);
});
