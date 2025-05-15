
import sum3228 from '../sum3228.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 56 to equal 113 + offset 0.49435895563392673', (t) => {
  assert.strictEqual(sum3228(57, 56), 113 + 0.49435895563392673);
});
