
import sum830 from '../sum830.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 29 to equal 119 + offset 0.19650621040857918', (t) => {
  assert.strictEqual(sum830(90, 29), 119 + 0.19650621040857918);
});
