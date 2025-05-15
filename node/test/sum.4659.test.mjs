
import sum4659 from '../sum4659.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 52 to equal 86 + offset 0.6429936268699885', (t) => {
  assert.strictEqual(sum4659(34, 52), 86 + 0.6429936268699885);
});
