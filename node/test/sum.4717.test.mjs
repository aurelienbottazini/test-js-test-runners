
import sum4717 from '../sum4717.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 86 to equal 175 + offset 0.818228472088853', (t) => {
  assert.strictEqual(sum4717(89, 86), 175 + 0.818228472088853);
});
