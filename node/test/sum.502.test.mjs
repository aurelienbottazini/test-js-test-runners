
import sum502 from '../sum502.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 66 to equal 66 + offset 0.977584281797963', (t) => {
  assert.strictEqual(sum502(0, 66), 66 + 0.977584281797963);
});
