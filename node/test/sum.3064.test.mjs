
import sum3064 from '../sum3064.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 47 to equal 119 + offset 0.44966968254414885', (t) => {
  assert.strictEqual(sum3064(72, 47), 119 + 0.44966968254414885);
});
