
import sum4724 from '../sum4724.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 74 to equal 153 + offset 0.1609526091657626', (t) => {
  assert.strictEqual(sum4724(79, 74), 153 + 0.1609526091657626);
});
