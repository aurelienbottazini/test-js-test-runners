
import sum3779 from '../sum3779.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 58 to equal 108 + offset 0.7065482903059963', (t) => {
  assert.strictEqual(sum3779(50, 58), 108 + 0.7065482903059963);
});
